using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

using Log = Serilog.Log;

using System.Text;

using Unitflix.Server.AutoMapper;
using Unitflix.Server.Database;
using Unitflix.Server.Exceptions;
using Unitflix.Server.Managers;
using Unitflix.Server.Models;
using Unitflix.Server.Options;
using Unitflix.Server.Seeder;
using Unitflix.Server.Validators;
using Serilog;
using Quartz;
using Unitflix.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
string? connectionString = builder.Configuration.GetSection("ConnectionStrings")["Default"];
builder.Services.Configure<AdminOptions>(builder.Configuration.GetSection("Credentials").GetSection("admin"));
builder.Services.Configure<JWTOptions>(builder.Configuration.GetSection("JWT"));
builder.Services.Configure<EmailOptions>(builder.Configuration.GetSection("Email"));

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    if (connectionString != null)
    {
        options.UseSqlServer(connectionString);
    }
});

// Adding auto mapper
builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

// Adding identity
builder.Services.AddIdentity<User, UserRole>(options =>
{
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireDigit = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 4;
})
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

string? jwtSecret = builder.Configuration["JWT:Secret"];

if (!string.IsNullOrEmpty(jwtSecret))
{
    // Adding Authentication
    builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    // Adding JWT
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidAudience = builder.Configuration["JWT:ValidAudience"],
            ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret))
        };
    });
}

// Adding Validators
builder.Services.AddScoped<PropertyValidator>();
builder.Services.AddScoped<ProjectValidator>();
builder.Services.AddScoped<PropertyUpdateValidator>();
builder.Services.AddScoped<ProjectUpdateValidator>();
builder.Services.AddScoped<PropertyRequestValidator>();
builder.Services.AddScoped<EmailConfigurationAddValidator>();
builder.Services.AddScoped<EmailConfigurationUpdateValidator>();

builder.Services.AddScoped<EmailManager>();
builder.Services.AddScoped<PropertyDataManager>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddQuartz();
builder.Services.AddQuartzHostedService(opt =>
{
    opt.WaitForJobsToComplete = true;
});

builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
    .CreateLogger();

builder.Host.UseSerilog(Log.Logger);

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

var scheduler = new JobSchedulingService();
await scheduler.ScheduleService(app.Services);

// Calling the Seeders
List<Seeder> seeders = new List<Seeder>()
{
    new LocationSeeder(),
    new DeveloperSeeder(),
    new PropertyTypeSeeder(),
    new AdminSeeder(),
    new PropertyStatusSeeder(),
};

seeders.ForEach(seeder =>
{
    seeder.Seed(app.Services);
});

app.UseHttpsRedirection();
app.UseStaticFiles();

// Use CORS
app.UseCors();

app.UseExceptionHandler();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
