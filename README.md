# meteor-react-redux-typescript prototyping
React, Typescript, Redux based on Meteor


[Meteor Folder Structure](https://forums.meteor.com/t/building-multiple-apps-from-the-same-source/8822/13)

```
app/			# a Meteor app directory, multiple app directories are supported
builds/			# app client and server builds, if any
config/		        # settings.json and env variables for dev, staging, production
scripts/		# misc. scripts for build or testing, if any

A Meteor app directory layout
.meteor/                # Meteor package configuration and local builds
client/
  main.js               # client entry point, imports all client code
  main.css/             # imports other styles from imports/client/components, if needed
  main.html	        # tags in <head> or use package to inject like react-helmet

server/
  main.js               # server entry point, imports all server code
 
imports/
  startup/		# All app-wide, common, and startup configuration
    client/             # configuration for routes, subscriptions, or any other client side services

    server/		# configuration for users, email, oauth or any other server side services
      index.js		# imports all server bootstrap, security, config and api code
      bootstrap.js      # general configuration startup code
      security.js       # set browser and security policies
      register-api.js   # imports server only code from api/*/server and all other api code
      user-config.js	# configure user account profile and email templates

  api/			# business logic
    moduleOne/          # a unit of business logic
      index.js		# imports all module one apis and re-export public apis for outside use
      ModuleOne.js      # module one collections
      methods.js        # module one methods
      schema.js         # schema definitions for module one
      ModuleOne.tests.js # tests for module one
      server/           # module one code that runs only on the server
        index.js        # imports all server code for module one
        methods.js      # server only methods for module one, if any
        publications.js	# publications for module one

    lib/		# api utility functions and shared libraries

  client/               # client only code so changes won’t rebuild server code
    components/	        # reusable ui components
      ComponentOne.js   # contains simple, stateless React component
      componentOne.tests.js # tests for component one
      ComponentTwo/     # complex React component with subcomponents
        ComponentTwo.js # main React component which imports subcomponents
        ComponentTwoContainer.js # HOC React code to fetch data and pass state to component 
        ComponentTwoA.js # stateless React ui subcomponent
        ComponentTwoB.js # stateless React ui subcomponents
        index.js        #  imports all component two ui code and re-exports

    layouts/            # wrapper components for behaviour and visuals
    lib/                # ui utility functions and shared libraries
      index.js          # imports all lib functions and re-exports as default and for each function
    styles/		# global style definitions including 3rd party vendor styles

  packages/		# 3rd party packages that we need to modify and support, if any

node_modules/           # app NPM packages defined in package.json
public/			# fonts, images, icons, favicon
resources/		# mobile icons and splash screens
tests/			# integration tests not run by Meteor built-in test tools
```
