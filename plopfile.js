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
      {
        path: "./src/App.tsx",
        pattern: /(<\/Routes)/g,
        template:
          '\t<Route path="/{{snakeCase name}}" element={ <{{titleCase name}}/> }/>\n$1',
        type: "modify",
      },
      {
        path: "./src/App.tsx",
        pattern: /(\/\/COMPONENT IMPORTS)/g,
        template:
          'import {{titleCase name}} from "./components/{{titleCase name}}/{{titleCase name}}"\n$1',
        type: "modify",
      },
      {
        path: "./src/common/reducers.ts",
        pattern: /(\/\/REDUCER IMPORTS)/g,
        template:
          'import {{camelCase name}} from "../components/{{titleCase name}}/reducers"\n$1',
        type: "modify",
      },
      {
        path: "./src/common/reducers.ts",
        pattern: /(\/\/REDUCERS)/g,
        template: "{{camelCase name}} : {{camelCase name}}, \n$1",
        type: "modify",
      },
      {
        type: "add",
        path: "./src/components/{{titleCase name}}/{{titleCase name}}.tsx",
        templateFile: "src/templates/components/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/actions.ts",
        templateFile: "src/templates/actions/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/reducers.ts",
        templateFile: "src/templates/reducers/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/sagas.ts",
        templateFile: "src/templates/sagas/DenseTable.hbs",
      },
    ],
  });
};
