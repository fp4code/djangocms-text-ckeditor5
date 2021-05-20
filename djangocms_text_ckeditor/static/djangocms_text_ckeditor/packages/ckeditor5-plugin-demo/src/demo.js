import Plugin from '@ckeditor/ckeditor5-core/src/plugin.js';

import DemoEditing from './edit.js';
import DemoUI from './ui.js';

export default class Demo extends Plugin {
	static get requires() {
		return [DemoEditing, DemoUI];
	}
}
