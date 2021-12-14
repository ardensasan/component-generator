const pluralize = require("pluralize");
const recursive = require("inquirer-recursive");
const axios = require("axios");
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
          'import {{titleCase name}} from "./components/{{titleCase name}}"\n$1',
        type: "modify",
      },
      {
        path: "./src/common/reducer.ts",
        pattern: /(\/\/REDUCER IMPORTS)/g,
        template:
          'import {{camelCase name}} from "../components/{{titleCase name}}/reducer"\n$1',
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
          "import {{camelCase name}}RootSaga from '../components/{{titleCase name}}/saga'\n$1",
        type: "modify",
      },
      {
        path: "./src/common/saga.ts",
        pattern: /(\/\/SPAWN SAGAS)/g,
        template: "yield spawn({{camelCase name}}RootSaga)\n$1",
        type: "modify",
      },
      {
        path: "./src/common/componentList.ts",
        pattern: /(\/\/COMPONENTS)/g,
        template: "{{titleCase name}},",
        type: "modify",
      },
    ];
  };

  const addFiles = (data) => {
    return [
      {
        type: "add",
        path: "./src/components/{{titleCase name}}/index.tsx",
        templateFile: "src/templates/component/DenseTable.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{titleCase name}}/FormDialog/index.tsx",
        templateFile: "src/templates/component/FormDialog/Form.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{titleCase name}}/FormDialog/types.ts",
        templateFile: "src/templates/component/FormDialog/Types.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/action.ts",
        templateFile: "src/templates/action/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/reducer.ts",
        templateFile: "src/templates/reducer/DenseTable.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/saga.ts",
        templateFile: "src/templates/saga/DenseTable.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{titleCase name}}/tableFields.ts",
        templateFile: "src/templates/tableFields.hbs",
      },
    ];
  };

  plop.setActionType('createEndpoint', async ({name})=>{
    const config = {
      method: "post",
      url: `http://localhost:3001/create/api/${name}`,
    }
    const {data} = await axios(config)
    if(data !== "SUCCESS"){
      throw "ERROR CREATING ENDPOINT"
    }
    return;
  })

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
      actions = [...actions,{ type: 'createEndpoint'}]
      actions = [...actions, ...modifyFiles(data)];
      actions = [...actions, ...addFiles(data)];
      return actions;
    },
  });
};
