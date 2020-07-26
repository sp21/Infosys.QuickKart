using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infosys.QuickKart.Services.Models
{
    public class CartProductsDetails
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public short Quantity { get; set; }
        public int QuantityAvailable { get; set; }

    }
}
