# Template

This is the default template for a simple .NET Core Web API. This template has:

- CORS Enabled
- Swagger
- Postgres & EF Core
- Ready for Docker Deployment

## TODO:

- Fix connection between deities and their creations


to Deploy to heroku:

- [ ] create a web app on heroku, make sure to have the CLI downloaded, installed, logged in and be logged into the container via heroku.
- [ ] Update your `dockerfile` to use your `*.dll` file instead of `dotnet-sdg-template.dll`
- [ ] Update the deploy script:
  - [ ] change `sdg-template-image` to `your-project-name-image`
  - [ ] change `heroku-web-app` to your web app name on heroku

