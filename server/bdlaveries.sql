-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 26 déc. 2022 à 12:19
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bdlaveries`
--

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `id` int(11) NOT NULL,
  `idPersonne` int(11) NOT NULL,
  `note` int(11) NOT NULL,
  `descriptif` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `avis`
--

INSERT INTO `avis` (`id`, `idPersonne`, `note`, `descriptif`) VALUES
(4, 1, 8, 'tres bonne application'),
(5, 1, 8, 'mauvaise application');

-- --------------------------------------------------------

--
-- Structure de la table `laverie`
--

DROP TABLE IF EXISTS `laverie`;
CREATE TABLE IF NOT EXISTS `laverie` (
  `id_laverie` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `laverie`
--

INSERT INTO `laverie` (`id_laverie`, `nom`) VALUES
(1, 'WASH\'N DRY'),
(2, 'LAVERIE de la Ceze'),
(3, 'LAVERIE LAFAYETTE'),
(4, 'LAVERIE DE FRANCE'),
(5, 'REVOLUTION'),
(6, 'LAVAGE AFFAIRE');

-- --------------------------------------------------------

--
-- Structure de la table `machine`
--

DROP TABLE IF EXISTS `machine`;
CREATE TABLE IF NOT EXISTS `machine` (
  `id_machine` int(11) NOT NULL,
  `id_laverie` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `machine`
--

INSERT INTO `machine` (`id_machine`, `id_laverie`) VALUES
(10, 1),
(15, 1),
(12, 2),
(13, 3);

-- --------------------------------------------------------

--
-- Structure de la table `personne`
--

DROP TABLE IF EXISTS `personne`;
CREATE TABLE IF NOT EXISTS `personne` (
  `nom` varchar(15) NOT NULL,
  `id` int(11) NOT NULL,
  `num_telephone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `login` varchar(20) NOT NULL,
  `mdp` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `personne`
--

INSERT INTO `personne` (`nom`, `id`, `num_telephone`, `email`, `login`, `mdp`) VALUES
('moussa', 21, '0621212121', 'moussabenchikh@gmail.com', 'mbenchikh', 'mbenchikh'),
('atwi', 22, '0622222222', 'atwi@gmail.com', 'atwi', 'atwi');

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int(11) NOT NULL,
  `idPersonne` int(11) NOT NULL,
  `idMachine` int(11) NOT NULL,
  `hDebut` float NOT NULL,
  `hFin` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id`, `idPersonne`, `idMachine`, `hDebut`, `hFin`) VALUES
(37, 21, 11, 22, 22.25);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
