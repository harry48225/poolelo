using System;

namespace poolelo.Services
{
    public static class EloService
    {
        private static int K_FACTOR = 32;

        public static double ComputeExpectedScoreForPlayerWithOpponent(int playerElo, int opponentElo)
        {
            double Q_A = Math.Pow(10, playerElo/400.0);
            double Q_B = Math.Pow(10, opponentElo/400.0);

            return Q_A/(Q_A + Q_B);
        }
    }
}