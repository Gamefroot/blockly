/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Kiwifroot Javascript that resolves instance tokens
 * @author rani_sputnik@hotmail.com
 */
'use strict';

goog.provide('Blockly.Kiwifroot.instances');

goog.require('Blockly.Kiwifroot');

(function() {


	Blockly.Kiwifroot['kiwi_instance_self'] = function(block) {
		var code = 'this.owner'; // TODO we may want to change this to self if there are any async functions
	  	return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
	};

	Blockly.Kiwifroot['kiwi_instance_select'] = function(block) {
	  var dropdown_id = block.getFieldValue('ID');
	  var code = 'this.state.getChildById("' + dropdown_id + '")';
	  
	  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
	};

	Blockly.Kiwifroot['kiwi_instance_set'] = function(block) {
		var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
		var prop = block.getFieldValue('PROP');
		var val = Blockly.Kiwifroot.valueToCode(block, 'VALUE', Blockly.Kiwifroot.ORDER_ASSIGNMENT);
		return inst + '.'+prop+' = '+val+';\n';
	};

	Blockly.Kiwifroot['kiwi_instance_get'] = function(block) {
		var inst = Blockly.Kiwifroot.valueToCode(block, 'INST', Blockly.Kiwifroot.ORDER_ATOMIC) || '(null)';
		var prop = block.getFieldValue('PROP');
		var code = inst + '.' + prop;
		return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
	};

	Blockly.Kiwifroot['kiwi_instance_get_visible'] = function(block) {
	  var code = 'this.owner.visible';
	  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
	};

	Blockly.Kiwifroot['kiwi_instance_set_visible'] = function(block) {
	  var value_vis = Blockly.Kiwifroot.valueToCode(block, 'VISIBLE', Blockly.Kiwifroot.ORDER_ATOMIC);
	  return 'this.owner.visible = ' + value_vis + ';\n';
	};

	Blockly.Kiwifroot['kiwi_instance_tag_management'] = function(block) {
	  var value_tag = Blockly.Kiwifroot.valueToCode(block, 'TAG', Blockly.Kiwifroot.ORDER_ATOMIC);
	  var value_instance = Blockly.Kiwifroot.valueToCode(block, 'INSTANCE', Blockly.Kiwifroot.ORDER_ATOMIC);
	  var dropdown_type = block.getFieldValue('TYPE');

	  var code = value_instance + '.' + dropdown_type + '(' + value_tag + ');\n';
	  return code;
	};

	Blockly.Kiwifroot['kiwi_instance_has_tags'] = function(block) {
	  var value_instance = Blockly.Kiwifroot.valueToCode(block, 'INSTANCE', Blockly.Kiwifroot.ORDER_ATOMIC);
	  var value_tag = Blockly.Kiwifroot.valueToCode(block, 'TAG', Blockly.Kiwifroot.ORDER_ATOMIC);

	  var code = value_instance + '.hasTag(' + value_tag + ')';
	  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
	};

	Blockly.Kiwifroot['kiwi_instance_get_by_tag'] = function(block) {
	  var value_tag = Blockly.Kiwifroot.valueToCode(block, 'TAG', Blockly.Kiwifroot.ORDER_ATOMIC);
	  var dropdown_type = block.getFieldValue('TYPE');

	  var code  = 'this.state.' + dropdown_type + '(' + value_tag + ')';
	  return [code, Blockly.Kiwifroot.ORDER_ATOMIC];
	};

	Blockly.Kiwifroot['kiwi_instance_get_all_by_tag'] = function(block) {
	  var value_tag = Blockly.Kiwifroot.valueToCode(block, 'TAG', Blockly.Kiwifroot.ORDER_ATOMIC);

	  var code = 'this.state.getChildrenByTag(' + value_tag + ')';
	  return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

})();