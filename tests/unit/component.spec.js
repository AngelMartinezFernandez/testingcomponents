import { shallowMount, mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'
import AccionSaldo from '@/components/AccionSaldo.vue'

describe('Form Component unit tests: ', () => {

  test('renders the label name', () => {
    const labelName = 'Nombre'
    const wrapper = mount(ContactForm)

    expect(wrapper.html()).toContain(labelName)
  })

  test('button Enviar call a function', () => {
    const labelName = 'Nombre'
    const wrapper = mount(ContactForm)

    expect(wrapper.html()).toContain(labelName)
  })
})

describe('AccionSaldo Component unit tests: ', () => {

  test('renders button', () => {
    const button = '<button>'
    const wrapper = mount(AccionSaldo)

    expect(wrapper.html()).toContain(button)
  })

  test('AccionSaldo recibe el prop texto y lo renderiza', () => {
    const text = 'Suma'
    const wrapper = mount(AccionSaldo, {
      props: {
        texto: text
      }
    })
    expect(wrapper.html()).toContain(text)

  })

  it('AccionSaldo click does something', async () => {
    const mockMethod = jest.spyOn(AccionSaldo.methods, 'accion')
    await shallowMount(AccionSaldo).find('button').trigger('click')
    expect(mockMethod).toHaveBeenCalled()
  })

})


