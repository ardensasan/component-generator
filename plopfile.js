import axios from "axios";
export default (plop) => {
  // plop.setActionType("addAPI", ({ name }) => {
  //   console.log(
  //     "%c 🍗 plop: ",
  //     "font-size:20px;background-color: #FFDD4D;color:#fff;",
  //     plop
  //   );
  //   plop.load();
  // });

  // plop.setGenerator("Table with dialog", {
  //   description: "Create a component with table and dialog",
  //   prompts: [
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "What is your api name",
  //     },
  //     {
  //       type: "confirm",
  //       name: "api",
  //       message: "",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: "addAPI",
  //     },
  //   ],
  // });

  // plop.setGenerator("Table without dialog", {
  //   description: "Create a component with table",
  //   prompts: [
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "What is your api name",
  //     },
  //     {
  //       type: "confirm",
  //       name: "api",
  //       message: "",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: "addAPI",
  //     },
  //   ],
  // });

  plop.setGenerator("Select table with dialog", {
    description: "Create a component with select table and dialog",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your api name",
      },
    ],
    actions: [
    //   {
    //     path: './src/App.tsx',
    //     pattern: /(\/\/ ROUTES HERE)/g,
    //     template: '\n<Route exact path="/{{snakeCase name}} component={{titleCase name}}/>\n',
    //     type: 'modify',
    // },
    {
      path: './src/App.tsx',
      pattern: /(\/\/COMPONENT IMPORTS)/g,
      template: 'import {{titleCase name}} from "./src/components/{{titleCase name}}/{{titleCase name}}"\n$1',
      type: 'modify',
  },
      // {
      //   type: "add",
      //   path: "src/components/{{titleCase name}}/{{titleCase name}}.tsx",
      //   templateFile: "src/templates/components/DenseTable.hbs",
      // },
      // {
      //   type: "add",
      //   path: "src/components/{{titleCase name}}/sagas.ts",
      //   templateFile: "src/templates/sagas/DenseTable.hbs",
      // },
      // {
      //   type: "add",
      //   path: "src/components/{{titleCase name}}/reducers.ts",
      //   templateFile: "src/templates/reducers/DenseTable.hbs",
      // },
    ],
  });
};
