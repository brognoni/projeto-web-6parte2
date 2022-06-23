--
-- Banco de dados: `teste2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `resenha`
--
create database blog;
use blog;
CREATE TABLE `resenha` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `autor` varchar(100) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `resenha` varchar(500) DEFAULT NULL,
  `link_imagem` varchar(100) DEFAULT NULL,
  `data_de_publi` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `filme`
--

INSERT INTO `resenha` (`id`, `nome`, `autor`, `categoria`, `resenha`, `link_imagem`, `data_de_publi`) VALUES
(1, 'Shang-CHI e a lenda dos Dez Anéis', 'Marvel', 'Ação', 'Shang-Chi precisa confrontar o passado que pensou ter deixado para trás...', NULL, '2022-06-06');
--

--
ALTER TABLE `resenha`
  ADD PRIMARY KEY (`id`);

--
ALTER TABLE `resenha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
