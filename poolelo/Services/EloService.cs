using System;

namespace poolelo.Services
{
    public static class EloService
    {
        public static readonly double WIN_SCORE = 1;
        public static readonly double DRAW_SCORE = 0.5;
        public static readonly double LOSE_SCORE = 0;
        private static int K_FACTOR = 32;

        public static double ComputeExpectedScoreForPlayerWithOpponent(int playerElo, int opponentElo)
        {
            double Q_A = Math.Pow(10, playerElo/400.0);
            double Q_B = Math.Pow(10, opponentElo/400.0);

            return Q_A/(Q_A + Q_B);
        }

        public static int UpdateElo(int elo, double expectedScore, double actualScore) {
            return (int)Math.Round(elo + K_FACTOR*(actualScore - expectedScore));
        }

        public static int UpdateEloUsingOpponentEloAndScore(int elo, int opponentElo, double score) {
            return UpdateElo(elo, ComputeExpectedScoreForPlayerWithOpponent(elo, opponentElo), score);
        }

    }
}