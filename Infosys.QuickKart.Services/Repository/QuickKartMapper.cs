using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using AutoMapper;
using Infosys.QuickKart.DataAccessLayer;

namespace Infosys.QuickKart.Services.Repository
{
    public class QuickKartMapper<Source, Destination>
        where Source : class
        where Destination : class
    {
        public QuickKartMapper()
        {           
            Mapper.CreateMap<Source, Destination>();
            Mapper.CreateMap<Destination, Source>();
        }

        public Destination Translate(Source obj)
        {
            return Mapper.Map<Destination>(obj);
        }
    }
}