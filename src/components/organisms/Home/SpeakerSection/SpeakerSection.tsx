import { useMemo } from 'react';

const SpeakerSection = () => {
  const speakersData = useMemo(
    () => [
      {
        speakerName: 'dr. Andina Chrisnawati Rahardjo, Sp.A',
        title: '1000 Hari Pertama Kehidupan',
        body: 'Dalam 6 Chapter dr. Andina akan mengajarkan bagaimana pentingnya 1000 Hari Pertama Kehidupan manusia dan bagaimana kita sebagai orang tua memaksimalkan waktu tersebut',
      },
      {
        speakerName: 'dr. Andina Chrisnawati Rahardjo, Sp.A',
        title: '1000 Hari Pertama Kehidupan',
        body: 'Dalam 6 Chapter dr. Andina akan mengajarkan bagaimana pentingnya 1000 Hari Pertama Kehidupan manusia dan bagaimana kita sebagai orang tua memaksimalkan waktu tersebut',
      },
      {
        speakerName: 'dr. Andina Chrisnawati Rahardjo, Sp.A',
        title: '1000 Hari Pertama Kehidupan',
        body: 'Dalam 6 Chapter dr. Andina akan mengajarkan bagaimana pentingnya 1000 Hari Pertama Kehidupan manusia dan bagaimana kita sebagai orang tua memaksimalkan waktu tersebut',
      },
      {
        speakerName: 'dr. Andina Chrisnawati Rahardjo, Sp.A',
        title: '1000 Hari Pertama Kehidupan',
        body: 'Dalam 6 Chapter dr. Andina akan mengajarkan bagaimana pentingnya 1000 Hari Pertama Kehidupan manusia dan bagaimana kita sebagai orang tua memaksimalkan waktu tersebut',
      },
      {
        speakerName: 'dr. Andina Chrisnawati Rahardjo, Sp.A',
        title: '1000 Hari Pertama Kehidupan',
        body: 'Dalam 6 Chapter dr. Andina akan mengajarkan bagaimana pentingnya 1000 Hari Pertama Kehidupan manusia dan bagaimana kita sebagai orang tua memaksimalkan waktu tersebut',
      },
    ],
    []
  );

  return (
    <div className="position-relative">
      <div
        className="container position-absolute w-100 h-100 top-50 start-50 translate-middle px-5 px-lg-0"
        style={{ zIndex: -1 }}
      >
        <div
          className="w-100 h-100"
          style={{
            backgroundColor: '#FAD70A',
            mixBlendMode: 'normal',
            opacity: '0.1',
            borderRadius: '48px',
          }}
        />
      </div>
      <h1 className="text-lincoln-green fw-bolder text-center py-5">
        Pilih Edukasi Terbaik dari <span className="text-coral">Pakarnya</span>
      </h1>
      <div className="text-nowrap">
        <div className="d-flex w-100 overflow-auto pb-5">
          {speakersData.map((speaker, i) => (
            <div key={i} className="w-100 mx-3">
              <div
                className="shadow-sm rounded-4 text-wrap pe-3 d-flex bg-lotion"
                style={{ width: '34.75rem' }}
              >
                <div
                  style={{ width: '45%' }}
                  className="d-flex align-items-end py-5"
                >
                  <h5 className="fw-bold text-center mt-auto">
                    {speaker.speakerName}
                  </h5>
                </div>
                <div style={{ width: '55%' }} className="py-5 ps-2">
                  <h5 className="text-lincoln-green fw-bold">
                    {speaker.title}
                  </h5>
                  <p className="fw-semibold">{speaker.body}</p>
                  <button className="btn btn-gold btn-lg fw-bold">
                    Mulai Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
