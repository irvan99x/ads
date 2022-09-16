-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2022 at 04:19 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ads_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

CREATE TABLE `buyer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `telephone` bigint(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `plusFee` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`id`, `name`, `telephone`, `address`, `plusFee`, `createdAt`, `updatedAt`) VALUES
(29, 'Irvan', 82112367972, 'Jl. Rawa Indah No. 55 RT.03/08 Kel. Jaticemapaka Kec. Pondok Gede, Kota Bekasi 17416', 1, '2022-09-05 14:35:08', '2022-09-05 14:35:08'),
(30, 'Resa', 81234217236, 'Jl. Kemang Raya, Kota Bekasi 17411', 0, '2022-09-05 14:35:31', '2022-09-05 14:35:31'),
(32, 'Idung', 81234562345, 'Jl. Setia 1 RT.11/08 Kel. Jaticempaka Kec. Pondok Gede, Kota Bekasi', 1, '2022-09-05 14:37:03', '2022-09-05 14:37:03'),
(33, 'Ravindra', 91234528364, 'Jl. Gamprit, Komplek AL Kota Bekasi', 1, '2022-09-05 14:37:31', '2022-09-05 14:37:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(8, 'Irvan', 'irvan@gmail.com', '$2b$10$7nB8bU9t0/Sn5yw2lvzbyuLM7fvDrvVa78eesBjvhqEhS4tZryWWO', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsIm5hbWUiOiJJcnZhbiIsImVtYWlsIjoiaXJ2YW5AZ21haWwuY29tIiwiaWF0IjoxNjYyNDMzMDk2LCJleHAiOjE2NjI1MTk0OTZ9.2Gt50X3NvmOJRMr6I922uUF3XlNCYTVKsAOcFebSdn4', '2022-09-01 08:17:01', '2022-09-06 02:58:16'),
(9, 'Anto', 'anto@gmail.com', '$2b$10$t/1BJijqfFqqp.W28UVt5uncBLTMHmHB9yLQLDFfVZemYi/QbI2LW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJBbnRvIiwiZW1haWwiOiJhbnRvQGdtYWlsLmNvbSIsImlhdCI6MTY2MjQ1ODcyMywiZXhwIjoxNjYyNTQ1MTIzfQ.DhM9yNz0mNujWCXCMKh05ranBbbd6YvVCHJMy-QO9LA', '2022-09-01 08:25:20', '2022-09-06 10:05:23'),
(20, 'Rifai', 'rifai@gmail.com', '$2b$10$x9bLEmapVDrxV7Dreibb8uGdr0Egz4POb3kvknLHq2ReRyF50RyhC', NULL, '2022-09-03 00:18:18', '2022-09-03 00:18:18'),
(27, 'asdasd', 'asdd@gasda.com', '$2b$10$UDlRJoNqhsYSqXDDUb1mdObPxncqRaWGN1/R/NIWli26qEhwn3g/m', NULL, '2022-09-06 03:24:46', '2022-09-06 03:24:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buyer`
--
ALTER TABLE `buyer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
