# UX Components

## Reviews Summary
  - Stars _hover: dropdown modal_
    - _dropdown modal_
      - ** X out of Y stars
      - *** 5 star *progress bar* X% _click: link to 5-star reviews_
      - *** 4 star *progress bar* X% _click: link to 4-star reviews_
      - *** 3 star *progress bar* X% _click: link to 3-star reviews_
      - *** 4 star *progress bar* X% _click: link to 2-star reviews_
      - *** 5 star *progress bar* X% _click: link to 5-star reviews_
      - **** See all Z reviews _click: link to Reviews page_
  - X customer reviews _click: scroll to reviews component_

## Customer Reviews
  - _left panel_
    - _dashboard_
      - _aggregates_
        - Stars Z _click: link to Review page_
        - ** X out of Y stars _hover: dropdown modal_
          - _dropdown modal_
            - Info
        - *** 5 star *progress bar* X% _click: link to 5-star reviews_
        - *** 4 star *progress bar* X% _click: link to 4-star reviews_
        - *** 3 star *progress bar* X% _click: link to 3-star reviews_
        - *** 4 star *progress bar* X% _click: link to 2-star reviews_
        - *** 5 star *progress bar* X% _click: link to 5-star reviews_
        - **** See all Z reviews _click: link to Reviews page_
      - _right panel_
        - Share your thoughts with other customers.
        - ***** Write a customer review _button: link to Your Reviews page_
    - Top customer reviews
      - Review
        - ****** ProfilePic Username _click: link to Profile page_
        - ******* Stars Title _click: link to Customer Review page_
        - Date
        - Options | Verified? _click: link to Customer Reviews Search page w/ like options_
        - Review
        - X people found this helpful
        - Helpful _button_ Not Helpful _button_ Comment _click: link to Customer Review page_ Report Abuse _link_
    - **** See all Z reviews _click: link to Reviews page_
    - ***** Write a customer review _button: link to Your Reviews page_
  - _right panel_
    - Customer images
      - _thumbnails_ _click: pop-up image modal_
      - See all customer images  _click: pop-up photo gallery modal_
    - Most recent customer reviews
      - ****** ProfilePic Username _click: link to Profile page_
      - ******* Stars Title _click: link to Customer Review page_
      - ******** Review
      - Published Y ago _relative time: green if <24hrs_
    - Search customer reviews
      - Search Bar Search _button: link to Customer Reviews Search page_
    

## CRUD API
Add new user
> POST */reviews/adduser

Get reviews
> GET */reviews/:productId

Update user
> PUT */reviews/updateuser

Delete user
> DELETE */reviews/deleteuser

