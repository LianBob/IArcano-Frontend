# El select Area no esta en el input , tiene q usarse aparte,

> Poner placeholders en todos los componentes excepto en el toogle, checkbox y el Radio , ya q se usa su valor para los atributos id y lavel

# Al select tienes q pasarle algo como esto

> <template #default> Select </template>

> <template #options>

> <option value="US">United States</option>

> <option value="CA">Canada</option>

> <option value="FR">France</option>

> <option value="DE">Germany</option>

> </template>
