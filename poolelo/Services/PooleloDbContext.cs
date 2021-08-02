using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using poolelo.Models;

namespace poolelo.Services
{
    public class PooleloDbContext : DbContext
    {
        public DbSet<Player> Players { get; set; }
        public PooleloDbContext(DbContextOptions<PooleloDbContext> options)
       : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>().ToTable("Players");

            modelBuilder.Entity<Player>()
                .HasData(
                    new Player
                    {
                        Id = 1,
                        FirstName = "Rupert"
                    },
                    new Player
                    {
                        Id = 2,
                        FirstName = "Harry"
                    }
                    , new Player
                    {
                        Id = 3,
                        FirstName = "Amar"
                    }
                 );
        }
    }
}
