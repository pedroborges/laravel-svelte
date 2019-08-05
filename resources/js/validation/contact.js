import v8n from 'v8n'

export const firstname = val => v8n().string().test(val) || 'Required field'
export const lastname = val => v8n().string().test(val) || 'Required field'
export const age = val => v8n().optional(v8n().number()).test(Number(val)) || 'Required number field'

export const contactRules = { firstname, lastname, age }
export const contactSchema = v8n().schema(contactRules)

export default { contactSchema, contactRules }
