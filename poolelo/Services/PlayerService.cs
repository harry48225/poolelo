using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace poolelo.Services
{
    public interface IPlayerService
    {
        Task<List<string>> GetPlayers();
    }
    public class PlayerService : IPlayerService
    {
        private readonly PooleloDbContext _pooleloDbContext;
        public PlayerService(PooleloDbContext pooleloDbContext)
        {
            _pooleloDbContext = pooleloDbContext;
        }

        public async Task<List<string>> GetPlayers()
        {
            return await _pooleloDbContext.Players
                .Select(player => player.FirstName)
                .ToListAsync();
        }
    }
}
