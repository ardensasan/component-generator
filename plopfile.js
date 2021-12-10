const pluralize = require("pluralize");
const recursive = require("inquirer-recursive");
module.exports = (plop) => {
  plop.inquirer.registerPrompt("recursive", recursive);

  const modifyFiles = (data) => {
    data.name = pluralize.singular(data.name);
    return [
      {
        path: "./src/App.tsx",
        pattern: /(<\/Routes)/g,
        template: `\t<Route path="/{{snakeCase name}}" element={ <{{titleCase name}}/> }/>\n$1`,
        type: "modify",
      },
      {
        path: "./src/App.tsx",
        pattern: /(\/\/COMPONENT IMPORTS)/g,
        template:
          'import {{titleCase name}} from "./component/{{titleCase name}}"\n$1',
        type: "modify",
      },
      {
        path: "./src/common/reducer.ts",
        pattern: /(\/\/REDUCER IMPORTS)/g,
        template:
          'import {{camelCase name}} from "../component/{{titleCase name}}/reducer"\n$1',
        type: "modify",
      },
      {
        path: "./src/common/reducer.ts",
        pattern: /(\/\/REDUCERS)/g,
        template: "{{camelCase name}} : {{camelCase name}}, \n$1",
        type: "modify",
      },
      {
        path: "./src/common/saga.ts",
        pattern: /(\/\/SAGA IMPORTS)/g,
        template:
          "import {{camelCase name}}RootSaga from '../component/{{titleCase name}}/saga'\n$1",
        type: "modify",
      },
      {
        path: "./src/common/saga.ts",
        pattern: /(\/\/SPAWN SAGAS)/g,
        template: "yield spawn({{camelCase name}}RootSaga)\n$1",
        type: "modify",
      },
    ];
  };

  const addFiles = (data) => {
    return [
      {
        type: "add",
        path: "./src/component/{{titleCase name}}/index.tsx",
        templateFile: "src/template/component/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/component/{{titleCase name}}/action.ts",
        templateFile: "src/template/action/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/component/{{titleCase name}}/reducer.ts",
        templateFile: "src/template/reducer/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/component/{{titleCase name}}/saga.ts",
        templateFile: "src/template/saga/DenseTable.hbs",
      },
      {
        type: "add",
        path: "./src/component/{{titleCase name}}/tableFields.ts",
        templateFile: "src/template/tableFields.hbs",
      },
    ];
  };

  plop.setGenerator("Select table with dialog", {
    description: "Create a component with select table and dialog",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your api name",
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return "Field name is required";
        },
      },
      {
        type: "confirm",
        name: "integrate",
        message: "Integrate API",
        default: true,
      },
      {
        type: "recursive",
        name: "fieldItems",
        message: "Add table column",
        default: true,
        prompts: [
          {
            type: "input",
            name: "key",
            message: "What is the field name?",
            validate: (value) => {
              if (/.+/.test(value)) {
                return true;
              }
              return "Field name is required";
            },
          },
        ],
      },
    ],
    actions: (data) => {
      let actions = [];
      actions = [...actions, ...modifyFiles(data)];
      actions = [...actions, ...addFiles(data)];
      return actions;
    },
  });
};
