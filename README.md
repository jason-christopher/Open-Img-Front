# Code Name: OpenImg

## Summary of Idea
- Users are able to create images via the OpenAI DALL·E 2 API

## What problem or pain point does it solve? 
- Art for people that aren't artist.

## Minimum Viable Product (MVP) definition. 

- User can log in via Auth0
- User can generate image via prompt
- User can save their prompt
- User can edit their saved prompt 
- User can delete their saved prompt

## Stretch Goals
- User can store the URL of their image without needing to regenerate that image via the API
- User can edit their prompt by sending the pre-existing image to the edit and using the built in edit feature
- User can store their prompts on their own google drive using the Google Drive API

-------------------------------------------------------------------------------------------------------------------------------------------------

## Work flow of using the site

1. User reaches the Home Page of Front End
2. User can read About Me's and see the log in button 
3. User can navigate to either edit or generate page via header nav bar
2. Generate page gives option to input prompt and once prompt returns image they have option to save (possibly either to DB or Google Drive)
3. Edit page gives option to view all saved prompts and select one to (possibly display the image) edit or delete it

-------------------------------------------------------------------------------------------------------------------------------------------------

## Web Request Response Cycle
<img src ="https://i.imgur.com/5fFizHI.png" />
