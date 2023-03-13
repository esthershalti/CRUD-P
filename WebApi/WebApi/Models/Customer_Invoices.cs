namespace WebApi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Customer Invoices")]
    public partial class Customer_Invoices
    {
        [Key]
        [StringLength(50)]
        public string InvId { get; set; }

        [Column(TypeName = "date")]
        public DateTime? InvDate { get; set; }

        [StringLength(50)]
        public string InvStatus { get; set; }

        public int? InvAmount { get; set; }
    }
}
