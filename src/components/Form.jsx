import { useForm } from 'react-hook-form'

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  function onSubmit(value) {
    alert(JSON.stringify(value))
    reset({
      name: '',
      email: '',
      password: '',
      profession: '',
      age: '',
      privacyTerms: ''
    })
  }
  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input
          className={errors?.name && 'input-error'}
          type="text"
          {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
        />

        {errors?.name?.type === 'required' && (
          <p className="error-message">Name is required.</p>
        )}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className={errors?.email && 'input-error'}
          type="email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            }
          })}
        />
        {errors?.email?.type === 'required' && (
          <p className="error-message">Email is required.</p>
        )}

        {errors?.email?.type === 'pattern' && (
          <p className="error-message">Email is invalid</p>
        )}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className={errors?.password && 'input-error'}
          type="password"
          {...register('password', { required: true, minLength: 8 })}
        />
        {errors?.password?.type === 'required' && (
          <p className="error-message">Password is required.</p>
        )}

        {errors?.password?.type === 'minLength' && (
          <p className="error-message">Password is menor que number.</p>
        )}
      </div>

      <div className="form-group">
        <label>Idade</label>
        <input
          className={errors?.age && 'input-error'}
          type="number"
          {...register('age', { required: true, min: 1, max: 99 })}
        />

        {errors?.age?.type === 'required' && (
          <p className="error-message">Age is required.</p>
        )}
        {errors?.age?.type === 'min' && (
          <p className="error-message">Enter a valid age .</p>
        )}
        {errors?.age?.type === 'max' && (
          <p className="error-message">Enter a valid age .</p>
        )}
      </div>
      {console.log(errors)}
      <div className="form-group">
        <label>Profissão</label>
        <select
          className={errors?.profession && 'input-error'}
          {...register('profession', { validate: value => value !== '0' })}
        >
          <option value="0">Selecione sua profissão</option>
          <option value="developer">Desenvolvedor</option>
          <option value="outher">Outros</option>
        </select>

        {errors?.profession?.type === 'validate' && (
          <p className="error-message">Profession is required.</p>
        )}
      </div>
      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            {...register('privacyTerms', { required: true })}
          />
          <label>I agree with privacy terms</label>
        </div>

        {errors?.privacyTerms?.type === 'required' && (
          <p className="error-message">PrivacyTerms is required.</p>
        )}
      </div>
      <div className="form-group">
        <button onClick={handleSubmit(onSubmit)}>Criar conta</button>
      </div>
    </div>
  )
}
