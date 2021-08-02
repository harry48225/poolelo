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
                EloService.ComputeExpectedScoreForPlayerWithOpponent(1613, 1609),
                2
            );
        }
    }
}
