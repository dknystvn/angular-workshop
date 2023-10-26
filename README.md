# angular-workshop
 Demo Angular app

# Workshop

- Install NPM + Angular Language Service + Angular Files extensions
- Init Angular project with CLI
- Install bootstrap, bootstrap-icons, register them in angular.json
- Install ESLint, prettier + add extensions
    - Init ESLint config
    - Share prettier config
    - Set default formatter in VS Code
    - Set Editor: Format On Save
- Talk about modules, properties of module definition, separation of modules
- Create a module for components: ng generate module ui-components
- Move it next to the app folder
- Edit tsconfig.ts and create index.ts with module exported:
	"paths": {
      "ui-components": ["src/ui-components/index.ts"]
    }
- Create components: Button, Menubar
- Create routing: browse, create
- Create basic layout with navigation
- Create environment file
- Create service
- Add listing