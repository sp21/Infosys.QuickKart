using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Infosys.QuickKart.Services.Models
{
    public class Cart
    {
        public string ProductId { get; set; }
        public string EmailId { get; set; }
        public short Quantity { get; set; }
    }
}