using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Infosys.QuickKart.Services.Models
{
    public class Product
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public Nullable<byte> CategoryId { get; set; }
        public decimal Price { get; set; }
        public int QuantityAvailable { get; set; }
    }
}