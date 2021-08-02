using System;
using Xunit;
using poolelo.Services;

namespace poolelo_tests
{
    public class EloServiceTests
    {
        [Theory]
        [InlineData(1613, 1603, 0.51)]
        [InlineData(1613, 1477, 0.69)]
        [InlineData(1613, 1388, 0.79)]
        [InlineData(1613, 1586, 0.54)]
        [InlineData(1613, 1720, 0.35)]
        public void ExpectedScore_IsCorrect(int playerAElo, int playerBElo, double expectedScore)
        {
            Assert.Equal(expectedScore, 
                EloService.ComputeExpectedScoreForPlayerWithOpponent(playerAElo, playerBElo),
                2
            );
        }

        [Theory]
        [InlineData(1613, 2.88, 2.5, 1601)]
        public void UpdatedElo_IsCorrect(int elo, double expectedScore, double actualScore, int expectedElo)
        {
            Assert.Equal(expectedElo,
                EloService.UpdateElo(elo, expectedScore, actualScore)
            );
        }

        [Fact]
        public void UpdatedElo_FromOpponentEloAndScore_IsCorrect()
        {
            var updatedElo = EloService.UpdateEloUsingOpponentEloAndScore(1613, 1603, EloService.WIN_SCORE);
            Assert.Equal(1629, updatedElo);
        }
    }
}
