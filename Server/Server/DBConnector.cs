using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using Server;

namespace Server
{
    public class DBConnector : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source = Loans.db;");
        }
        public DbSet<Loan> LoansInfo { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Loan>().HasData(
            new Loan() { Id = "44f9dbd5-251b-4d6f-8d11-17f5369d8256", borrower_name = "Amelia", repayment_amount = 123, funding_amount = 345},
            new Loan() { Id = "44f9dbd5-251b-4d6f-8d11-17f5369d8259", borrower_name = "Richard", repayment_amount = 234, funding_amount = 456}
            );
        }
    }
}
