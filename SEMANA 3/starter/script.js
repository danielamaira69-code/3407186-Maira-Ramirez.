// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adaptado al dominio: Tienda de cosméticos orgánicos "Cosmi Puros"
// Este script simula cálculos básicos de ventas, inventario y validaciones
// dentro de una tienda de productos orgánicos para el cuidado de la piel.
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Constantes base del negocio Cosmi Puros
// Representan precios y stock inicial de algunos productos

const CREAM_PRICE = 25000;        // precio de una crema orgánica
const SOAP_PRICE = 12000;         // precio de un jabón orgánico
const MAX_STOCK = 100;            // stock máximo disponible
const DISCOUNT_PERCENT = 0.10;    // descuento del 10%


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Cantidad de productos vendidos en el día
const creamsSold = 12;
const soapsSold = 20;

// Calcular ingresos por cada tipo de producto
const creamRevenue = CREAM_PRICE * creamsSold;
console.log("Ingresos por cremas:", creamRevenue);

// Calcular ingresos por jabones
const soapRevenue = SOAP_PRICE * soapsSold;
console.log("Ingresos por jabones:", soapRevenue);

// Calcular ingresos totales del día
const totalRevenue = creamRevenue + soapRevenue;
console.log("Ingresos totales del día:", totalRevenue);

// Calcular el stock restante después de las ventas
const remainingStock = MAX_STOCK - (creamsSold + soapsSold);
console.log("Stock restante:", remainingStock);

// Calcular el promedio de ingresos por producto
const totalProductsSold = creamsSold + soapsSold;
const averageRevenue = totalRevenue / totalProductsSold;
console.log("Ingreso promedio por producto:", averageRevenue);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Variable que acumula el total de ventas durante el día
let runningTotal = 0;

// Se suma la venta de cremas
runningTotal += creamRevenue;
console.log("Total tras venta de cremas:", runningTotal);

// Se suma la venta de jabones
runningTotal += soapRevenue;
console.log("Total tras venta de jabones:", runningTotal);

// Se aplica un descuento del 10% a la venta total (promoción del día)
runningTotal *= (1 - DISCOUNT_PERCENT);
console.log("Total con descuento aplicado:", runningTotal);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// Verificar si el stock llegó a cero
const isOutOfStock = remainingStock === 0;
console.log("¿El stock se agotó?", isOutOfStock);

// Validar si se vendieron exactamente 12 cremas
const soldExactCreams = creamsSold === 12;
console.log("¿Se vendieron exactamente 12 cremas?", soldExactCreams);

// Validar si el ingreso total superó los 300000
const highSales = totalRevenue > 300000;
console.log("¿Las ventas superaron 300000?", highSales);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// Cliente miembro del programa de fidelidad
const isMember = true;

// Cliente hizo una compra grande
const purchaseAmount = totalRevenue;

// Descuento especial si es miembro y compra más de 200000
const qualifiesForDiscount = isMember && purchaseAmount >= 200000;
console.log("¿Aplica descuento especial?", qualifiesForDiscount);

// Promoción si es miembro o si compra más de 150000
const qualifiesForPromo = isMember || purchaseAmount >= 150000;
console.log("¿Aplica promoción?", qualifiesForPromo);

// Validar si NO hay productos agotados
const storeHasStock = !(remainingStock === 0);
console.log("¿La tienda aún tiene productos?", storeHasStock);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// Mostrar los datos más importantes del día en Cosmi Puros
console.log("Productos vendidos:", totalProductsSold);
console.log("Ingresos totales antes de descuento:", totalRevenue);
console.log("Ingresos finales con descuento:", runningTotal);
console.log("Stock restante en la tienda:", remainingStock);