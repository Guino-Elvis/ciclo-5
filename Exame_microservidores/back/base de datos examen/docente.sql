-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2023 a las 08:21:25
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
-- Base de datos: `docente`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE `docente` (
  `id` int(11) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`id`, `apellido`, `correo`, `dni`, `nombre`, `telefono`) VALUES
(1, 'yujra vargas', 'ppp@gmail.com', '74345845', 'ppp', '916882598'),
(2, 'yujra', 'guinoyujra@gmai.com', '6646', 'gino', '565565656'),
(3, 'gg', 'ggg', 'gg', 'ggg', 'gg'),
(4, 'aaa', 'aaaaaaaaaa', 'aaaaaaaa', 'aaaaaaa', 'aaaaaaaaaaaa'),
(5, 'ddddddddddddddddddd', 'dddddddddddd', 'ddddd', 'sd', 'dddddddd'),
(6, 'ddddddddddd', 'ddddddddd', 'ddddddddd', 'asd', 'ddddddddddd'),
(7, 'asdasdasdasdasdasdasdasdasd', 'asdasdadasd', 'asdasdasdadasdasdasdasd', 'asd', 'asdasdasdasdasdasdasd'),
(8, 'ddddddd', 'ddddddddd', 'ddddddddddddddd', 'sd', 'dddddddddddd'),
(9, 'aaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaa', 'aaaaaaaa', 'a', 'aaaaaa'),
(10, 'e', 'ee', 'ee', 'ee', 'ee'),
(11, 'elvis', 'juanito@gmail.com', '456456', 'juanito', '45456456'),
(12, 'yujra', 'gino@', '456', 'gino', '4859');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `docente`
--
ALTER TABLE `docente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
