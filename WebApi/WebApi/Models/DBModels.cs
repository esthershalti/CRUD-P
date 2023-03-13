namespace WebApi.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class DBModels : DbContext
    {
        public DBModels()
            : base("name=DBModels")
        {
        }

        public virtual DbSet<Customer_Invoices> Customer_Invoices { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer_Invoices>()
                .Property(e => e.InvId)
                .IsUnicode(false);

            modelBuilder.Entity<Customer_Invoices>()
                .Property(e => e.InvStatus)
                .IsUnicode(false);
        }
    }
}
