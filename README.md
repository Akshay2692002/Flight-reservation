# Flight-reservation
Types of users:
->Users
->Admin

Functionality of the Admin:

1.Add flight details -- Get the flight detail from the user and store it into the database.
2.View flight details -- Parse through all the flight details and display it.
3.Delete flight details -- Display the detail and enable Delete option that delete the data from the database.
4.View all the booked tickets -- Displays the Booked tickets to the Admin.

Functionality of the User:

1.Search flight -- Parse through all the flight details and filters the detail based on 'date' and 'time'.
2.Book ticket -- Depending on the flight id the user has to provide some basic details to book the flight ticket.
3.Cancel ticket -- After booking all the tickets it will be displayed and Cancellation option is enabled.
4.Booking rules -- Some of the basic flight booking rules will be displayed.

The user has to make sure that the flight-id is correct in order to book ticket.

There are three schema for the flight-details,user-details and login-details

"ejs" files have been used as 'view engine' in order to show basic ui of the web app.
