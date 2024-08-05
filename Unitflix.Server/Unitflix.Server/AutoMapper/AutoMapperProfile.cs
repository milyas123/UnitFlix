using AutoMapper;
using AutoMapper.Execution;

using Newtonsoft.Json;
using Unitflix.Server.API_DTO;
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
            CreateMap<PropertyWirteAPIDTO, PropertyWriteDTO>()
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
                .ForMember(writeDTO => writeDTO.UserDetail, (member) => member.MapFrom(resolver => JsonParser.Parse<UserDetailWriteDTO>(resolver.UserDetail))
                );

            CreateMap<PropertyUpdateAPIDTO, PropertyUpdateDTO>()
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
                .ForMember(writeDTO => writeDTO.FeaturesToRemove,
                member => member.MapFrom(resolver => JsonParser.Parse<List<int>>(resolver.FeaturesToRemove)))
                .ForMember(writeDTO => writeDTO.PaymentPlanItemsToRemove,
                member => member.MapFrom(resolver => JsonParser.Parse<List<int>>(resolver.PaymentPlanItemsToRemove)))
                .ForMember(writeDTO => writeDTO.KeyHighlightsToRemove,
                member => member.MapFrom(resolver => JsonParser.Parse<List<int>>(resolver.KeyHighlightsToRemove)))
                .ForMember(writeDTO => writeDTO.PropertyDetailsToRemove,
                member => member.MapFrom(resolver => JsonParser.Parse<List<int>>(resolver.PropertyDetailsToRemove)))
                .ForMember(writeDTO => writeDTO.GalleryImagesToRemove,
                member => member.MapFrom(resolver => JsonParser.Parse<List<int>>(resolver.GalleryImagesToRemove)));

            CreateMap<PropertyWriteDTO, Property>();
            CreateMap<PropertyUpdateDTO, Property>();
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
