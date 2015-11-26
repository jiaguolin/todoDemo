/**
 * Created with JetBrains WebStorm.
 * User: mohanar
 * Date: 4/4/13
 * Time: 12:43 AM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmployeeSchema  = new Schema(
    {
  name: String
});

mongoose.model('employees', EmployeeSchema);

