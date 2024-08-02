using AutoMapper;
using AutoMapper.Execution;

using Newtonsoft.Json;

using Unitflix.Server.DTOs;
using Unitflix.Server.Helpers;
using Unitflix.Server.Models;

namespace Unitflix.Server.AutoMapper
{
    public class AutoMapperProfile : Profile
    {
        #region Constructor

        /// <summary>
        /// Default Constructor
        /// </summary>
        public AutoMapperProfile()
        {
            CreateMap<PropertyAPIDTO, PropertyWriteDTO>()
                .ForMember(writeDTO => writeDTO.Overview, (member) => member.MapFrom(resolver => JsonParser.Parse<OverviewWriteDTO>(resolver.Overview))
                )
                .ForMember(writeDTO => writeDTO.Features, (member) => member.MapFrom(resolver => JsonParser.Parse<List<FeatureWriteDTO>>(resolver.Features))
                )
                .ForMember(writeDTO => writeDTO.PaymentPlanItems, (member) => member.MapFrom(resolver => JsonParser.Parse<List<PaymentPlanItemWriteDTO>>(resolver.PaymentPlanItems))
                )
                .ForMember(writeDTO => writeDTO.KeyHighlights, (member) => member.MapFrom(resolver => JsonParser.Parse<List<KeyHighlightWriteDTO>>(resolver.KeyHighlights))
                )
                .ForMember(writeDTO => writeDTO.PropertyDetails, (member) => member.MapFrom(resolver => JsonParser.Parse<List<PropertyDetailsWriteDTO>>(resolver.PropertyDetails))
                )
                .ForMember(writeDTO => writeDTO.UserDetail, (member) => member.MapFrom(resolver => JsonParser.Parse<UserDetail>(resolver.UserDetail))
                );
            CreateMap<PropertyWriteDTO, Property>();
            CreateMap<FeatureWriteDTO, Feature>();
            CreateMap<KeyHighlightWriteDTO, KeyHighlight>();
            CreateMap<OverviewWriteDTO, Overview>();
            CreateMap<PaymentPlanItemWriteDTO, PaymentPlanItem>();
            CreateMap<PropertyDetailsWriteDTO, PropertyDetail>();
            CreateMap<UserDetailWriteDTO, UserDetail>();
        }

        #endregion
    }
}
