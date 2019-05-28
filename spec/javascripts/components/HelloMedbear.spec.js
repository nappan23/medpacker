import { mount } from '@vue/test-utils';
import Target from '@js/components/HelloMedbear';

describe('@js/components/HelloMedbear', () => {
	it('is a Vue instance', () => {
		const wrapper = mount(Target);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});
