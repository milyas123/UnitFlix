using Microsoft.EntityFrameworkCore;

using Unitflix.Server.Database;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
string? connectionString = builder.Configuration.GetSection("ConnectionStrings")["Default"];

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    if(connectionString != null)
    {
        options.UseSqlServer(connectionString);
    }
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
