<?php
    class Usuario {
        public $nombre = '';
        public $apellido = '';
        public $legajo = 0;
        public $domicilio = '';
        public $telefono = 0;
        public $taller = '';
        public $edad = 0;
        public $FechaInscr = 0;

       public function __construct ($_legajo,$_apellido,$_nombre,$_domicilio,$_telefono,$_taller,$_edad){
            $this->nombre = $_nombre;
            $this->apellido = $_apellido;
            $this->legajo  = $_legajo;
            $this->FechaInscr = date("Y-m-d");
            $this->telefono  = $_telefono;
            $this->domicilio  = $_domicilio;
            $this->taller  = $_taller;
            $this->edad  = $_edad;
        }

    }



?>