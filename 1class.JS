public class Movie {
    private String title;
    private String studio;
    private String rating;


    public Movie(String title, String studio, String rating) {
        this.title = title;
        this.studio = studio;
        if (rating != null && !rating.isEmpty()) {
            this.rating = rating;
        } else {
            this.rating = "PG";
        }
    }

    public String getRating() {
        return rating;
    }

    public static Movie[] getPG(Movie[] movies) {
        int count = 0;
        for (Movie movie : movies) {
            if (movie.getRating().equals("PG")) {
                count++;
            }
        }

        Movie[] pgMovies = new Movie[count];
        int index = 0;
        for (Movie movie : movies) {
            if (movie.getRating().equals("PG")) {
                pgMovies[index] = movie;
                index++;
            }
        }

        return pgMovies;
    }

    public static void main(String[] args) {
        Movie casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
        
 
        System.out.println("Movie Title: " + casinoRoyale.title);
        System.out.println("Studio: " + casinoRoyale.studio);
        System.out.println("Rating: " + casinoRoyale.rating);
    }
}