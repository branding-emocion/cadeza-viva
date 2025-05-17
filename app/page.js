"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const apartmentsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const introInView = useInView(introRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const apartmentsInView = useInView(apartmentsRef, { once: true });

  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
        style={{ opacity: headerOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.jpg"
              alt="Cadeza Logo"
              width={90}
              height={50}
              objectFit="contain"
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection(introRef)}
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Proyecto
            </button>
            <button
              onClick={() => scrollToSection(featuresRef)}
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection(apartmentsRef)}
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Departamentos
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-neutral-700 hover:text-neutral-900 font-medium"
            >
              Contacto
            </button>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700">
            <Phone className="mr-2 h-4 w-4" /> Contáctanos
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Image
            src="/luxury-modern-apartment.png"
            alt="VIVA Residencial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          className="container relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Construye un Hogar
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-medium mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            PROTAGONISTA DE GRANDES MOMENTOS
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            VIVE ENTRE LA NATURALEZA Y EL CONFORT
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Conoce más
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-800">
              Bienvenido a VIVA
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              El proyecto residencial que redefine tu forma de vivir en
              Trujillo. Ubicado en la urbanización Las Quintanas, Viva es el
              espacio donde tus sueños toman forma.
            </p>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Diseñado para quienes buscan comodidad, seguridad y calidad de
              vida, Viva te ofrece un entorno moderno y acogedor, pensado para
              acompañarte en cada etapa de tu vida.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Haz de VIVA tu hogar y comienza a construir una nueva historia
              llena de grandes momentos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <motion.div
                className="bg-neutral-50 p-8 rounded-xl shadow-sm flex flex-col items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-amber-600 mb-4">19</h3>
                <p className="text-xl font-medium text-neutral-700">
                  DEPARTAMENTOS
                </p>
              </motion.div>
              <motion.div
                className="bg-neutral-50 p-8 rounded-xl shadow-sm flex flex-col items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-amber-600 mb-4">12</h3>
                <p className="text-xl font-medium text-neutral-700">
                  ESTACIONAMIENTOS
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
              CARACTERÍSTICAS GENERALES
            </h2>
            <p className="text-xl text-neutral-600">
              TU NUEVO DEPA CON TODO LO QUE NECESITAS
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                10 PISOS + MINI DEPA + AZOTEA
              </h3>
              <p className="text-neutral-600">
                Diseño moderno y funcional para maximizar tu espacio y
                comodidad.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                3 DORMITORIOS
              </h3>
              <p className="text-neutral-600">
                Espacios amplios y confortables para toda la familia.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                SALA COMEDOR
              </h3>
              <p className="text-neutral-600">
                Ambientes integrados para compartir momentos especiales.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-amber-600 mb-8">
              VIVE CERCA A TODO
            </h3>
            <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-amber-600 mr-2" />
                <p className="text-lg font-medium text-neutral-800">
                  Urbanización Las Quintanas, Trujillo
                </p>
              </div>
              <p className="text-neutral-600">
                Ubicación estratégica con fácil acceso a centros comerciales,
                colegios, universidades y más.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apartments Section */}
      <section ref={apartmentsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={apartmentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
              Conoce tu Nuevo Hogar
            </h2>
            <p className="text-xl text-neutral-600">
              UN DEPARTAMENTO CON ESTILO
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={apartmentsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="/placeholder-067md.png"
                alt="Sala"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sala</h3>
                <p className="text-white">
                  TU NUEVO PUNTO DE ENCUENTRO FAMILIAR
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={apartmentsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=800&query=modern+luxury+dining+room+interior"
                alt="Comedor"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Comedor</h3>
                <p className="text-white">
                  UN ESPACIO PARA COMPARTIR Y CELEBRAR
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={apartmentsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=800&query=modern+luxury+bedroom+interior"
                alt="Dormitorio"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Dormitorio
                </h3>
                <p className="text-white">UN RINCÓN HECHO PARA TI</p>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={apartmentsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=800&query=modern+luxury+kitchen+interior"
                alt="Cocina"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Cocina</h3>
                <p className="text-white">FUNCIONAL, CÓMODA Y LISTA PARA TI</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={apartmentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-neutral-800 mb-8 text-center">
              TIPOLOGÍAS
            </h3>

            <Tabs defaultValue="tipoA" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8">
                <TabsTrigger value="tipoA">Tipo A</TabsTrigger>
                <TabsTrigger value="tipoB">Tipo B</TabsTrigger>
                <TabsTrigger value="tipoC">Tipo C</TabsTrigger>
                <TabsTrigger value="tipoD">Tipo D</TabsTrigger>
                <TabsTrigger value="tipoE">Tipo E</TabsTrigger>
                <TabsTrigger value="tipoF">Tipo F</TabsTrigger>
                <TabsTrigger value="tipoG">Tipo G</TabsTrigger>
              </TabsList>

              <TabsContent
                value="tipoA"
                className="bg-neutral-50 p-6 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/Tipo/TIPOA.jpg"
                      alt="Tipo A"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4">
                      TIPO A
                    </h4>
                    <p className="text-neutral-600 mb-2">
                      DPTO 201 301 401 501
                    </p>
                    <p className="text-neutral-600 mb-2">
                      3 DORMITORIOS - 2 BAÑOS
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA OCUPADA APROX. 93.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA TECHADA APROX. 93.00m²
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="tipoB"
                className="bg-neutral-50 p-6 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/Tipo/TIPOB.jpg"
                      alt="Tipo B"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4">
                      TIPO B
                    </h4>
                    <p className="text-neutral-600 mb-2">
                      DPTO 202 302 402 502
                    </p>
                    <p className="text-neutral-600 mb-2">
                      3 DORMITORIOS - 2 BAÑOS
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA OCUPADA APROX. 94.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA TECHADA APROX. 94.00m²
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="tipoC"
                className="bg-neutral-50 p-6 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/Tipo/TIPOC.jpg"
                      alt="Tipo C"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4">
                      TIPO C
                    </h4>
                    <p className="text-neutral-600 mb-2">DPTO 601</p>
                    <p className="text-neutral-600 mb-2">
                      3 DORMITORIOS - 2 BAÑOS
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA OCUPADA APROX. 93.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA TECHADA APROX. 83.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA LIBRE APROX. 10.00m²
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="tipoD"
                className="bg-neutral-50 p-6 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/Tipo/TIPOD.jpg"
                      alt="Tipo D"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4">
                      TIPO D
                    </h4>
                    <p className="text-neutral-600 mb-2">DPTO 602</p>
                    <p className="text-neutral-600 mb-2">
                      3 DORMITORIOS - 2 BAÑOS
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA OCUPADA APROX. 94.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA TECHADA APROX. 84.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA LIBRE APROX. 10.00m²
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="tipoE"
                className="bg-neutral-50 p-6 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/Tipo/TIPOE.jpg"
                      alt="Tipo E"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4">
                      TIPO E
                    </h4>
                    <p className="text-neutral-600 mb-2">
                      DPTO 701 801 901 1001
                    </p>
                    <p className="text-neutral-600 mb-2">
                      3 DORMITORIOS - 2 BAÑOS
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA OCUPADA APROX. 83.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA TECHADA APROX. 83.00m²
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="tipoF"
                className="bg-neutral-50 p-6 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/Tipo/TIPOF.jpg"
                      alt="Tipo F"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4">
                      TIPO F
                    </h4>
                    <p className="text-neutral-600 mb-2">
                      DPTO 702 802 902 1002
                    </p>
                    <p className="text-neutral-600 mb-2">
                      3 DORMITORIOS - 2 BAÑOS
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA OCUPADA APROX. 85.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA TECHADA APROX. 85.00m²
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="tipoG"
                className="bg-neutral-50 p-6 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/Tipo/TIPOG.png"
                      alt="Tipo G"
                      width={100}
                      height={100}
                      objectFit="cover"
                      className="w-full h-full max-h-[600px]  rounded-xl object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-neutral-800 mb-4">
                      TIPO G
                    </h4>
                    <p className="text-neutral-600 mb-2">DPTO 1101</p>
                    <p className="text-neutral-600 mb-2">
                      3 DORMITORIOS - 2 BAÑOS
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA OCUPADA APROX. 94.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA TECHADA APROX. 76.00m²
                    </p>
                    <p className="text-neutral-600 mb-2">
                      ÁREA LIBRE APROX. 18.00m²
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Avances de Obra
            </h2>
            <p className="text-xl text-neutral-300">
              Sigue el progreso de tu futuro hogar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative overflow-hidden rounded-xl h-[400px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/modern-apartment-construction.png"
                alt="Avances de Obra"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-amber-500 mb-4">
                Construcción en Progreso
              </h3>
              <p className="text-lg text-neutral-300 mb-6">
                Mantente al día con los avances de construcción de tu futuro
                hogar. Nuestro compromiso es la transparencia y calidad en cada
                etapa del proceso.
              </p>
              <p className="text-lg text-neutral-300 mb-8">
                Visita nuestra página de avances para ver fotos actualizadas,
                cronograma de obra y detalles del progreso de construcción.
              </p>
              <Link
                href="https://www.cadeza.com.pe/avances-viva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Ver Avances de Obra
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Avances de Obra Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
              Avances de Obra
            </h2>
            <p className="text-xl text-neutral-600">
              Sigue el progreso de tu futuro hogar
            </p>
          </motion.div>

          <Tabs defaultValue="fase1" className="w-full mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="fase1">Fase 1: Cimentación</TabsTrigger>
              <TabsTrigger value="fase2">Fase 2: Estructura</TabsTrigger>
              <TabsTrigger value="fase3">Fase 3: Acabados</TabsTrigger>
              <TabsTrigger value="fase4">Fase 4: Entrega</TabsTrigger>
            </TabsList>

            <TabsContent
              value="fase1"
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="relative overflow-hidden rounded-xl h-[400px]"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/construction-foundation.png"
                    alt="Fase 1: Cimentación"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="flex flex-col justify-center">
                  <div className="bg-amber-50 text-amber-800 px-4 py-2 rounded-full inline-block w-fit mb-4">
                    Enero 2025 - Marzo 2025
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                    Fase 1: Cimentación
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    En esta primera etapa, estamos estableciendo las bases
                    sólidas de tu futuro hogar. Incluye la excavación,
                    preparación del terreno y construcción de los cimientos que
                    sostendrán toda la estructura.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="w-full bg-neutral-200 rounded-full h-2.5">
                      <div
                        className="bg-amber-600 h-2.5 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-neutral-700 ml-4">
                      100%
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="fase2"
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="relative overflow-hidden rounded-xl h-[400px]"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/placeholder-5fjw5.png"
                    alt="Fase 2: Estructura"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="flex flex-col justify-center">
                  <div className="bg-amber-50 text-amber-800 px-4 py-2 rounded-full inline-block w-fit mb-4">
                    Abril 2025 - Julio 2025
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                    Fase 2: Estructura
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    En esta fase, estamos levantando las columnas, vigas y losas
                    que darán forma a tu departamento. La estructura principal
                    del edificio toma forma, definiendo los espacios que pronto
                    serán tu hogar.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="w-full bg-neutral-200 rounded-full h-2.5">
                      <div
                        className="bg-amber-600 h-2.5 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-neutral-700 ml-4">
                      75%
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="fase3"
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="relative overflow-hidden rounded-xl h-[400px]"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/construction-interior-finishing.png"
                    alt="Fase 3: Acabados"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="flex flex-col justify-center">
                  <div className="bg-amber-50 text-amber-800 px-4 py-2 rounded-full inline-block w-fit mb-4">
                    Agosto 2025 - Octubre 2025
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                    Fase 3: Acabados
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    En esta etapa, nos enfocamos en los detalles que harán de tu
                    departamento un espacio único. Instalación de pisos,
                    revestimientos, carpintería, instalaciones eléctricas y
                    sanitarias, y todos los acabados de calidad que caracterizan
                    a VIVA.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="w-full bg-neutral-200 rounded-full h-2.5">
                      <div
                        className="bg-amber-600 h-2.5 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-neutral-700 ml-4">
                      30%
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="fase4"
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="relative overflow-hidden rounded-xl h-[400px]"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/new-apartment-building.png"
                    alt="Fase 4: Entrega"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="flex flex-col justify-center">
                  <div className="bg-amber-50 text-amber-800 px-4 py-2 rounded-full inline-block w-fit mb-4">
                    Noviembre 2025 - Diciembre 2025
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                    Fase 4: Entrega
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    La fase final incluye los últimos detalles, pruebas de todos
                    los sistemas, limpieza profunda y preparación para la
                    entrega. Pronto podrás recibir las llaves de tu nuevo hogar
                    y comenzar a crear grandes momentos.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="w-full bg-neutral-200 rounded-full h-2.5">
                      <div
                        className="bg-amber-600 h-2.5 rounded-full"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-neutral-700 ml-4">
                      10%
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="https://www.cadeza.com.pe/avances-viva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium flex items-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Ver Galería Completa de Avances
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">
                ¿Interesado en VIVA?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Déjanos tus datos y un asesor se pondrá en contacto contigo para
                brindarte toda la información que necesitas.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Nombre
                      </label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label
                        htmlFor="apellido"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Apellido
                      </label>
                      <Input id="apellido" placeholder="Tu apellido" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Teléfono
                    </label>
                    <Input id="telefono" placeholder="Tu número de teléfono" />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      placeholder="¿En qué podemos ayudarte?"
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">
                  Información de contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-800">Teléfono</p>
                      <p className="text-neutral-600">
                        978 727 651 / 960 552 806
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-800">Email</p>
                      <p className="text-neutral-600">ventas@cadeza.com.pe</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-800">Dirección</p>
                      <p className="text-neutral-600">
                        Av. San Martin 327, Trujillo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm h-[300px] relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=map+of+Las+Quintanas+Trujillo+Peru"
                  alt="Ubicación"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=40&width=120&query=CADEZA+logo+white"
                alt="Cadeza Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-neutral-400 mb-4">
                14 AÑOS BRINDANDO HOGARES DE CALIDAD
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <div className="space-y-2">
                <p className="text-neutral-400">978 727 651 / 960 552 806</p>
                <p className="text-neutral-400">ventas@cadeza.com.pe</p>
                <p className="text-neutral-400">Av. San Martin 327, Trujillo</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(introRef)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Proyecto
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(featuresRef)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Características
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(apartmentsRef)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Departamentos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
            <p>
              © {new Date().getFullYear()} Cadeza. Todos los derechos
              reservados.
            </p>
            <p className="mt-2 text-xs">
              Las imágenes mostradas son referenciales y de carácter
              ilustrativo. El proyecto puede presentar modificaciones en
              acabados, distribución o áreas durante su desarrollo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
