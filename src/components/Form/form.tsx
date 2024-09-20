import { useRef, useState } from "react";
import useTranslation from "../../hooks/useTranslation";
import styles from '../../../styles/Home.module.css'

export default function Form() {
    const {t} = useTranslation();

    const nameRef = useRef<HTMLInputElement>(null);
    const qntPessoasRef = useRef<HTMLInputElement>(null);
    const dataRef = useRef<HTMLInputElement>(null);

    const [temCrianca, setTemCrianca] = useState<string>("Não"); 
    const [qntCriancas, setQntCriancas] = useState<number>(0); 
    const [idadeCriancas, setIdadeCriancas] = useState<number[]>([]); 

    const handleAgeChange = (index: number, value: string) => {
      const updatedIdadeCriancas = [...idadeCriancas];
      updatedIdadeCriancas[index] = Number(value);
      setIdadeCriancas(updatedIdadeCriancas);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      
      const name = nameRef.current?.value || "";
      const quantidadePessoas = qntPessoasRef.current?.value || "";
      const dataDesejada = dataRef.current?.value || "";
      const temCriancaText = temCrianca === "Sim" ? "Sim" : "Não";
      const quantasCriancas = temCrianca === "Sim" ? qntCriancas : "";
      const idadesCriancas = temCrianca === "Sim" ? idadeCriancas.join(", ") : "";
      
      const message = `Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20reserva%20para%20${quantidadePessoas}%20pessoas.%20Nome:%20${name}%20Quantidade%20de%20Pessoas:%20${quantidadePessoas}%20Data%20Desejada:%20${dataDesejada}%20Tem%20crianças:%20${temCriancaText}%20${temCrianca === "Sim" ? `Quantas%20crianças:%20${quantasCriancas}%20Idades%20das%20crianças:%20${idadesCriancas}` : ""}`;
      
      window.open(`https://wa.me/558481096734?text=${message}`, '_blank');
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
            
                <div className={styles.horizontal_inputs}> {t('Nome')}
                    <input type="text" ref={nameRef} id="name" required/>
                        {t('QuantidadeDePessoas')}
                    <input type="number" min="1" max="60" ref={qntPessoasRef} required id="qntPessoas" />
                </div>

                <div className={styles.horizontal_inputs}>
                {t('TemCrianças')}
                    <input 
                        type="radio" 
                        id="sim" 
                        name="temCrianca" 
                        value="Sim" 
                        checked={temCrianca === "Sim"} 
                        onChange={(e) => {
                        setTemCrianca(e.target.value);
                        setIdadeCriancas([]); // Reset child ages when changing option
                        }} 
                    />
                    <label htmlFor="sim">{t('Sim')}</label>
            
                    <input 
                        type="radio" 
                        id="nao" 
                        name="temCrianca" 
                        value="Não" 
                        checked={temCrianca === "Não"} 
                        onChange={(e) => {
                        setTemCrianca(e.target.value);
                        setQntCriancas(0); // Reset number of children if "Não" is selected
                        setIdadeCriancas([]); // Clear children ages when "Não" is selected
                        }} 
                    />
                    <label htmlFor="nao">{t('Nao')}</label>
                </div>
        
                {temCrianca === "Sim" && (
                <div>
                    {t('QuantasCriancas')}
                    <input 
                    required
                    type="number" 
                    min="1" 
                    max="6" 
                    value={qntCriancas} 
                    onChange={(e) => {
                        const numCriancas = Number(e.target.value);
                        setQntCriancas(numCriancas);
                        setIdadeCriancas(new Array(numCriancas).fill(0));
                    }} 
                    />
                    {idadeCriancas.map((idade, index) => (
                    <div key={index}>
                        {t('IdadeCriança')}
                        {index + 1}:
                        <input 
                        required
                        type="number" 
                        min="0" 
                        max="12" 
                        value={idade} 
                        onChange={(e) => handleAgeChange(index, e.target.value)} 
                        />
                    </div>
                    ))}
                </div>
                )}

                <div className={styles.horizontal_inputs}>
                    {t('DataDesejada')}
                    <input type="date" ref={dataRef} required />
                    <button type="submit" className={styles.form_button}>{t('botaoEnviar')}</button>
                </div>
                
            </form>
            <span className={styles.form_span}> {t('avisoForm')}
            </span>
        </div>
    )
}