import './Schedule.scss';

const ScheduleItem = ({ number, title, description }) => {
  return (
    <div className="schedule-item">
      <span className="schedule-number">{number}</span>
      <h3 className="schedule-item-title">{title}</h3>
      <p className="schedule-desc">{description}</p>
    </div>
  );
};

const Schedule = () => {
  return (
    <section className="schedule-section">
      
      {/* Header-ul secțiunii */}
      <div className="schedule-header-tag">PROGRAM</div>
      <div className="schedule-header-content">
        <h2 className="schedule-main-title">O seară, pas cu pas.</h2>
        <span className="schedule-subtitle">Structură propusă · orele vor fi anunțate</span>
      </div>

      {/* Lista punctelor din program */}
      <div className="schedule-list">
        <ScheduleItem 
          number="01" 
          title="Bun venit" 
          description="Primirea publicului și prezentarea cauzei." 
        />
        <ScheduleItem 
          number="02" 
          title="Spectacolul" 
          description="Momente artistice și întâlniri care aduc bucurie." 
        />
        <ScheduleItem 
          number="03" 
          title="Împreună pentru bine" 
          description="Mulțumiri, aplauze și încheierea serii." 
        />
      </div>

    </section>
  );
};

export default Schedule;