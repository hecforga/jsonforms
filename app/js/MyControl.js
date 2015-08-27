var app = angular.module('makeithappen');
app.run(['JSONForms.RenderService', 'JSONForms.RenderDescriptionFactory', function(RenderService, RenderDescriptionFactory) {

    function MyControl() {

        return {
            priority: 100,
            render: function(element, subSchema, schemaPath, dataProvider) {
                var control = RenderDescriptionFactory.createControlDescription(dataProvider.data, subSchema, schemaPath);
                control['template'] = '<input type="text" style="background-color: #3278b3; color: #8dd0ff" class="form-control" data-jsonforms-model data-jsonforms-validation />'
                return control;
            },

            isApplicable: function (element, subSchema, schemaPath) {
                return element.type == "Control" && schemaPath.endsWith("firstName");
            }
        }
    }

    RenderService.register(new MyControl());
}]);