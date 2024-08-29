using AutoMapper;

using Unitflix.Server.Database;
using Unitflix.Server.DTOs;
using Unitflix.Server.Models;

namespace Unitflix.Server.Managers
{
    public class PropertyDataManager
    {
        #region Private Members

        private ApplicationDbContext _dbContext;

        private IMapper _mapper;

        #endregion

        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public PropertyDataManager(ApplicationDbContext dbContext,
            IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Includes the required data to the properties
        /// </summary>
        /// <param name="properties"></param>
        /// <returns></returns>
        public List<PropertyReadDTO> IncludeData(List<Property> properties)
        {
            Dictionary<int, Location> locations = _dbContext.Locations.ToDictionary(location => location.Id, location => location);
            Dictionary<int, Developer> developers = _dbContext.Developers.ToDictionary(dev => dev.Id, dev => dev);
            Dictionary<int, PropertyType> types = _dbContext.PropertyTypes.ToDictionary(type => type.Id, type => type);
            Dictionary<string, PropertyStatus> statuses = _dbContext.PropertyStatuses.ToDictionary(type => type.Name, type => type);

            return properties.Select(property =>
             {
                 PropertyReadDTO readDTO = _mapper.Map<PropertyReadDTO>(property);
                 readDTO.PropertyLocation = locations[property.location];
                 if (property.Developer != null)
                 {
                     readDTO.PropertyDeveloper = developers[property.Developer.Value];
                 }

                 PropertyStatus? status;
                 if(!string.IsNullOrEmpty(property.Status) && statuses.TryGetValue(property.Status, out status))
                 {
                     readDTO.PropertyStatus = _mapper.Map<PropertyStatusReadDTO>(status);
                 }

                 readDTO.Type = types[property.PropertyType];
                 return readDTO;
             })
                .ToList();
        }

        #endregion
    }
}
