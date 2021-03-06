class User < ApplicationRecord
    validates :first_name, :last_name, :password_digest, :session_token, presence:true
    validates :email, presence:true, uniqueness:true
    validates :password, length: { minimum: 6 }, allow_nil:true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :reservations
    has_one_attached :photo

    has_many :restaurants,
        through: :reservations,
        source: :restaurant

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def ensure_photo
        unless self.photo.attached?
            self.photo.attach(io: File.open('app/assets/images/mustache_logo.png'), filename: 'mustache_logo.png')
        end
    end
end
