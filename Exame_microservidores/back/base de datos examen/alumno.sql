-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2023 a las 08:20:59
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
-- Base de datos: `alumno`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id`, `apellido`, `codigo`, `correo`, `dni`, `nombre`) VALUES
(7, 'yujra vargas', '202100458', 'ginoyujra38@gmail.com', '74349846', 'gino elviss'),
(8, 'as', 'as', 'as', 'as', 'aaa'),
(9, 'aa', 'aaa', 'aaa', 'aa', 'aaa'),
(10, 'asas', 'asasas', 'asas', 'as', 'asas'),
(11, 'asas', 'asasas', 'asas', 'asas', 'asas'),
(12, 'asasaaa', 'asasas', 'asas', 'asas', 'asas'),
(13, 'asdasd', 'asdsdaasd', 'asdasdasd', 'asdsd', 'sdaasd'),
(14, 'saas', 'asas', 'asas', 'as', 'sas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
