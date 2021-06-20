## Week 2 Assignment: Student Store

Submitted by: Diego Saldonid

Deployed Application (optional): [Student Store Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [x] The API should contain an endpoint that serves an array of all products in the store
- [x] A Store model should handle all data management logic for the API and be the interface for read/write operations to the JSON file.
- [x] The frontend should include a landing page that displays the products available for purchase.
- [x] Each product should have an individual page that shows the details of the product.

#### STRETCH FEATURES

- [ ] Deploy your website with Heroku & Surge. 
- [x] An endpoint should exist for creating orders and saving them to a JSON file. Each order should contain the email of the person placing the order, the items associated with the order, and the quantity of each item purchased.
- [x] There should be a `Sidebar` component that appears on every page and has two states - `open` and `closed`. When the sidebar is opened, it should display a shopping cart of all the products the user currently has in their cart. It should also calculate and display the total amount in dollars for the checked-out items. When it's closed, the sidebar should be much thinner and not display its internal content.
- [ ] A checkout form should be available that allows the user to enter their email and send their order to the API.
- [x] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [x] Create an endpoint that serves only a single product based on the product's id
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Walkthrough Video
Frontend Functionality 
https://www.loom.com/share/d1df382f8d7d49299848dbdd7ec2abd2?sharedAppSource=personal_library`

Backend API
https://www.loom.com/share/43baa2c7fa404a5d936a60d019eac320

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The labs were once again incredibly helpful in preparing me for the assignment this week. Although I felt incredibly overwhelmed during the middle of the week, having the lab
materials to refer back to was a life saver. Having the detailed videos break down not only the how but the why of our labs allowed me to gain a deeper understanding of 
our assignment.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time I'd implement an add to cart function. I was attempting to add that feature in back had too many road bumps as time was running out. Specifically, I
was having a hard time passing down callback functions within react. After finally my function to get passed down, I realized that I had a global state for all quantities.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Overall my demo went pretty well, I'm proud of all that I could accomplish in such a short time. I didn't account for my site being unresponsive at times. Seeing my site
not perform as optimally inspires me to be careful with my asyncronous calls.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

First, I'd like to give a huge shoutout to alll the instructors. They always provide incredible feedback and I appreciate them giving us room to be lost. I'd also like
to give a shoutout to Stephanie, Sharon and Gevork. Although I was feeling pretty burnt out by the end of this week, their energy was super helpful in giving me the 
energy I needed to finish the project and week off strong.
