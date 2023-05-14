-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2023 a las 08:21:39
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inscripccion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripccion`
--

CREATE TABLE `inscripccion` (
  `id` int(11) NOT NULL,
  `alumno_id` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `serie` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inscripccion`
--

INSERT INTO `inscripccion` (`id`, `alumno_id`, `descripcion`, `numero`, `serie`) VALUES
(1, '7', 'inscripccion 01', '01', '00223'),
(2, '8', 'inscripccion n2', '00263', '031312'),
(4, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(5, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(6, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(8, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(9, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(10, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(11, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(12, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(13, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(14, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(15, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(16, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(17, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(18, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(19, '10', 'se inscribio este dia xd ', '003', 'xsa'),
(20, '10', 'se inscribio este dia xd ', '003', 'xsa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripccion_detalle`
--

CREATE TABLE `inscripccion_detalle` (
  `id` int(11) NOT NULL,
  `costo` double DEFAULT NULL,
  `curso_id` int(11) DEFAULT NULL,
  `inscripccion_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inscripccion_detalle`
--

INSERT INTO `inscripccion_detalle` (`id`, `costo`, `curso_id`, `inscripccion_id`) VALUES
(1, 30, 1, 1),
(2, 30, 2, 1),
(3, 30, 3, 1),
(8, 80, 3, 2),
(20, 90, 3, 4),
(21, 90, 3, 5),
(22, 90, 3, 6),
(23, 90, 3, 8),
(24, 90, 3, 9),
(25, 90, 3, 10),
(26, 90, 3, 11),
(27, 90, 3, 12),
(28, 90, 3, 13),
(29, 90, 3, 14),
(30, 90, 3, 15),
(31, 90, 3, 16),
(32, 90, 3, 17),
(33, 90, 3, 18),
(34, 90, 3, 19),
(35, 90, 3, 20);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inscripccion`
--
ALTER TABLE `inscripccion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `inscripccion_detalle`
--
ALTER TABLE `inscripccion_detalle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5jtoq016vostrqm8nwvo845j1` (`inscripccion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `inscripccion`
--
ALTER TABLE `inscripccion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `inscripccion_detalle`
--
ALTER TABLE `inscripccion_detalle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `inscripccion_detalle`
--
ALTER TABLE `inscripccion_detalle`
  ADD CONSTRAINT `FK5jtoq016vostrqm8nwvo845j1` FOREIGN KEY (`inscripccion_id`) REFERENCES `inscripccion` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
