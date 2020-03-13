# AvailableSurface 
## <img src="https://available-surface.herokuapp.com/assets/simple_logo-7d85cb55f3a989431fa379d491afe5604c03a46cb15dfe5aeb10ff5bed9c373c.png" width=100 height=100 style="float:right">
[Available Surface](https://available-surface.herokuapp.com/#/) is an OpenTable clone that simulates the experience of searching for and booking reservations. 

## Features
- Restaurant Search
    - The search has two main forms, the search bar the appears on the homepage and the toggle items that appear on the restaurant index. Both update search parameters, but fetch information at different times. The sidebar returns results immediately, but the search bar waits for the user to click the button before retrieving new restaurant information.
- Reservations
    - Creation
        - Reservations are available both through the restaurant index and the indiviudal restaurant show page. Each button updates the search parameters and renders a form for the user to complete their reservation.
        - If a user is logged-in when they create a reservation, they can view, edit, or delete that resrvation from their reservations page.