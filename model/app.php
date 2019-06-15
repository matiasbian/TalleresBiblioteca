<?php
    class Applicaction {

        public $comprobantes = '';
        public function __construct (){
            require_once('comprobante.php');
            $this->comprobantes = new Comprobante();
        }

       


        public function addAlumno($_alumno){

        }

        public function modAlumno($_alumnoNuevo,$_alumnoAntiguo){

        }

        public function removeAlumno($_alumno){

        }

        public function addTaller($_taller){

        }

        public function modifTaller($_tallerNuevo,$_tallerAntiguo){
            
        }

        public function removeTaller($_taller){
            
        }

        public function generarComprobante($_alumno){

        }

        public function filtrarAlumnosPorTaller($taller){

        }

        public function imprimirComprobante(){

        }

        public function imprimirTalleres(){
            
        }

    }

?>