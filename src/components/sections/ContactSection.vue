<template>
  <section class="contact" id="contacto">
    <div class="contact-inner">
      <div class="reveal">
        <div class="s-tag">Escríbenos</div>
        <h2 class="s-title">SOLICITA<br>TU<br>SERVICIO</h2>
        <div class="contact-items">
          <div class="ci" v-for="c in contactInfo" :key="c.label">
            <div class="ci-box">{{ c.icon }}</div>
            <div>
              <div class="ci-lbl">{{ c.label }}</div>
              <div class="ci-val">{{ c.value }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-wrap reveal rd2">
        <div class="form-row">
          <div class="fg">
            <label>Nombre completo</label>
            <input type="text" v-model="form.name" placeholder="Tu nombre" />
          </div>
          <div class="fg">
            <label>Teléfono</label>
            <input type="tel" v-model="form.phone" placeholder="+51 999 000 000" />
          </div>
        </div>
        <div class="fg">
          <label>Correo electrónico</label>
          <input type="email" v-model="form.email" placeholder="correo@ejemplo.com" />
        </div>
        <div class="fg">
          <label>Tipo de servicio</label>
          <select v-model="form.service">
            <option value="">Seleccionar servicio</option>
            <option v-for="s in services" :key="s.name" :value="s.name">{{ s.name }}</option>
          </select>
        </div>
        <div class="form-row">
          <div class="fg">
            <label>Origen</label>
            <input type="text" v-model="form.origin" placeholder="Ciudad de origen" />
          </div>
          <div class="fg">
            <label>Destino</label>
            <input type="text" v-model="form.destination" placeholder="Ciudad de destino" />
          </div>
        </div>
        <div class="fg">
          <label>Observaciones</label>
          <textarea v-model="form.message" placeholder="Fecha, número de pasajeros, detalles adicionales..."></textarea>
        </div>

        <!-- Error de validación -->
        <p v-if="error" class="form-error">{{ error }}</p>

        <button class="btn-submit" @click="submitForm">
          <span class="btn-txt">💬 Enviar por WhatsApp</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { contactInfo, services } from '@/data/content.js'

const WHATSAPP_NUMBER = '51999713436' // Sin + ni espacios

const error = ref('')
const form = ref({
  name: '', phone: '', email: '',
  service: '', origin: '', destination: '', message: '',
})

function submitForm() {
  if (!form.value.name) {
    error.value = 'Por favor ingresa tu nombre.'
    return
  }
  if (!form.value.phone) {
    error.value = 'Por favor ingresa tu teléfono.'
    return
  }
  if (!form.value.service) {
    error.value = 'Por favor selecciona un tipo de servicio.'
    return
  }

  error.value = ''

  const msg = [
    'NUEVA SOLICITUD DE SERVICIO',
    `Nombre: ${form.value.name}`,
    `Telefono: ${form.value.phone}`,
    form.value.email ? `Email: ${form.value.email}` : '',
    `Servicio: ${form.value.service}`,
    form.value.origin ? `Origen: ${form.value.origin}` : '',
    form.value.destination ? `Destino: ${form.value.destination}` : '',
    form.value.message ? `Observaciones: ${form.value.message}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  window.open(url, '_blank')

  form.value = {
    name: '', phone: '', email: '',
    service: '', origin: '', destination: '', message: '',
  }
}

</script>

<style scoped>
.contact {
  background: var(--navy);
  padding: 7rem 5%;
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: start;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.ci {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}

.ci-box {
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  background: rgba(30, 79, 216, .1);
  border: 1px solid rgba(30, 79, 216, .25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all .3s;
}

.ci:hover .ci-box {
  background: rgba(217, 31, 42, .12);
  border-color: rgba(217, 31, 42, .4);
}

.ci-lbl {
  font-family: var(--fm);
  font-size: .62rem;
  color: var(--blue2);
  letter-spacing: .15em;
  text-transform: uppercase;
  margin-bottom: .2rem;
}

.ci-val {
  font-size: .92rem;
  color: var(--offwhite);
}

.form-wrap {
  background: var(--navy2);
  border: 1px solid rgba(30, 79, 216, .15);
  padding: 2.5rem;
  position: relative;
}

.form-wrap::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--red));
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.fg {
  margin-bottom: 1.2rem;
}

.fg label {
  display: block;
  font-family: var(--fm);
  font-size: .62rem;
  color: var(--blue2);
  letter-spacing: .15em;
  text-transform: uppercase;
  margin-bottom: .5rem;
}

.fg input,
.fg select,
.fg textarea {
  width: 100%;
  background: var(--navy3);
  border: 1px solid rgba(255, 255, 255, .07);
  color: var(--white);
  padding: .85rem 1rem;
  font-family: var(--fb);
  font-size: .9rem;
  transition: all .25s;
  outline: none;
}

.fg input:focus,
.fg select:focus,
.fg textarea:focus {
  border-color: rgba(30, 79, 216, .5);
  background: var(--navy4);
  box-shadow: 0 0 0 3px rgba(30, 79, 216, .08);
}

.fg textarea {
  min-height: 90px;
  resize: vertical;
}

.fg select option {
  background: var(--navy3);
}

/* Error */
.form-error {
  color: var(--red);
  font-size: .82rem;
  margin-bottom: 1rem;
  padding: .6rem 1rem;
  border: 1px solid rgba(217, 31, 42, .3);
  background: rgba(217, 31, 42, .06);
}

/* Botón */
.btn-submit {
  width: 100%;
  background: #25D366;
  color: white;
  border: none;
  padding: 1.05rem;
  font-family: var(--fb);
  font-weight: 600;
  font-size: .88rem;
  letter-spacing: .06em;
  cursor: pointer;
  transition: all .3s;
  position: relative;
  overflow: hidden;
}

.btn-submit:hover {
  background: #1ebe5d;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(37, 211, 102, .3);
}

.btn-txt {
  position: relative;
  z-index: 1;
}

@media (max-width: 900px) {
  .contact-inner {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>